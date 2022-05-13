package com.projet.formation.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Domaine implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="domaineId")
	private Long domaineId;
	@Column(unique = true,nullable = false)
	private String libelle;

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Long getDomaineId() {
		return domaineId;
	}

	public void setDomaineId(Long domaineId) {
		this.domaineId = domaineId;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
}