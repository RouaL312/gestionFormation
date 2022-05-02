package com.projet.formation.security;

import com.projet.formation.Exception.SpringKeyStoreException;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.security.*;
import java.security.cert.CertificateException;
import java.time.Instant;

import static java.util.Date.from;

@Service
public class JwtProvider {

    private KeyStore keyStore;
    @Value("${jwt.expiration.time}")
    private Long jwtExpirationInMillis;

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtProvider.class);

    @PostConstruct
    public void init(){
        /**
         * Assymetric Encryption using Java Keystore
         */
        try {
            keyStore = KeyStore.getInstance("JKS");
            InputStream resourceAsStream = getClass().getResourceAsStream("/springkeystore.jks");
            keyStore.load(resourceAsStream, "b2m@dmin".toCharArray());
        } catch (KeyStoreException | CertificateException | NoSuchAlgorithmException | IOException e) {
            throw new SpringKeyStoreException("Exception occured while loading keystore");
        }    }

    /**
     * generate jwt
     * @param authentication
     * @return Jwt
     */
    public String generateToken(Authentication authentication){
        User principal = (User) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(principal.getUsername())
                .signWith(getPrivateKey())
                .setExpiration(from(Instant.now().plusMillis(jwtExpirationInMillis)))
                .compact();
    }

    /**
     * check if jwt is valid
     * @param jwt
     * @return boolean
     */
    public boolean validateToken(String jwt){

             try{
                 Jwts.parser().setSigningKey(getPublickey()).parseClaimsJws(jwt);
                 return true;
             }catch (ExpiredJwtException e){
                 LOGGER.info("Invalid JWT signature: " + e.getMessage());
                 LOGGER.debug("Exception " + e.getMessage(), e);
                 return false;
             }

    }

    /**
     * get public Key
     * @return PublicKey
     */
    private PublicKey getPublickey() {
        try {
            return keyStore.getCertificate("springkeystore").getPublicKey();
        } catch (KeyStoreException e) {
            throw new SpringKeyStoreException("Exception occured while retrieving public key from keystore");
        }
    }

    /**
     * get private key
     * @return PrivateKey
     */
    private PrivateKey getPrivateKey() {
        try {
            return (PrivateKey) keyStore.getKey("springkeystore", "b2m@dmin".toCharArray());
        } catch (KeyStoreException | NoSuchAlgorithmException | UnrecoverableKeyException e) {
            throw new SpringKeyStoreException("Exception occured while retrieving private key from keystore");
        }
    }

    /**
     * extract login from jwt
     * @param token
     * @return login
     */
    public String getLoginFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(getPublickey())
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public Long getJwtExpirationInMillis() {
        return jwtExpirationInMillis;
    }

    public String generateTokenWithLogin(String login) {
        return Jwts.builder()
                .setSubject(login)
                .setIssuedAt(from(Instant.now()))
                .signWith(getPrivateKey())
                .setExpiration(from(Instant.now().plusMillis(jwtExpirationInMillis)))
                .compact();
    }
}
