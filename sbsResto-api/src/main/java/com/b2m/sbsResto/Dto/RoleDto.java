package com.b2m.sbsResto.Dto;

import org.bongiorno.dto.support.AbstractDto;

public class RoleDto extends AbstractDto {
    private String nameRole;
    private long id;

    public String getNameRole() {
        return nameRole;
    }

    public void setNameRole(String nameRole) {
        this.nameRole = nameRole;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
