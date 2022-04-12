package com.b2m.sbsresto.dto;

import org.bongiorno.dto.support.AbstractDto;

public class RoleDto extends AbstractDto {
    private String name;
    private long id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name= name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
