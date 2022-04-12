package com.b2m.sbsresto.models;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="equipe")
@SequenceGenerator(name = "id_equipe_seq", sequenceName = "id_equipe_seq", allocationSize = 1, initialValue = 1)
public class Equipe  implements Serializable {
    @Id
    @Column(name = "id_equipe")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "id_equipe_seq")
    private long id;

    @Column(name = "code_equipe")
    private String codeEquipe;

    @JsonIgnore
    @OneToMany(mappedBy="equipe",cascade = CascadeType.ALL)
    private Set<User> users;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCodeEquipe() {
        return codeEquipe;
    }

    public void setCodeEquipe(String codeEquipe) {
        this.codeEquipe = codeEquipe;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
