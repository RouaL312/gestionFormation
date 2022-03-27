package com.b2m.sbsResto.controllers;

import com.b2m.sbsResto.Mapper.service.MapperService;
import org.bongiorno.dto.support.AbstractDto;
import org.dom4j.tree.AbstractEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


public abstract class AbstractController<D extends AbstractDto, E extends AbstractEntity> {


    @Autowired
    protected MapperService mapperService;


    protected D toDto(E entity) {
        D dto = null;

        try {
            // On crée une instance du DTO
            dto = (D) ((Class) ((ParameterizedType) this.getClass().
                    getGenericSuperclass()).getActualTypeArguments()[0]).newInstance();
            // On recopie les valeurs de l'entité dans le dto (correspondance par nom de variable)
            mapperService.map(entity, dto);
        } catch (InstantiationException | IllegalAccessException e) {

        }

        return dto;
    }
    protected Page<D> toDto(Page<E> page) {
        Page<D> dto = null;
        if (page != null && page.getContent() != null) {
            List<D> dtos = new ArrayList<>(page.getContent().size());
            for (E entity : page.getContent()) {
                dtos.add(toDto(entity));
            }
            Pageable pageable = new PageRequest(page.getNumber(), page.getSize(), page.getSort());
            dto = new PageImpl<>(dtos, pageable, page.getTotalElements());
        }
        return dto;
    }

    /**
     * Map an entity to a DTO
     *
     * @param entity              Entity to map
     * @param dtoInstance         An instance of DTO you want to map to
     * @return The DTO mapped from entity
     */
    @SuppressWarnings({"rawtypes", "unchecked"})
    protected <O, Y> O toDto(Y entity, O dtoInstance) {
        O dto = null;

        try {
            // On crée une instance du DTO
            dto = (O) dtoInstance.getClass().newInstance();
            // On recopie les valeurs de l'entité dans le dto (correspondance par nom de variable)
            mapperService.map(entity, dto);
        } catch (InstantiationException | IllegalAccessException e) {
        }

        return dto;
    }
    /**
     * Return a Page of DTO
     *
     * @param page        Page of entities
     * @param dtoInstance An instance of DTO you want to map to
     * @return A Page of DTO
     */
    protected <O, Y> Page<O> toDto(Page<Y> page, O dtoInstance) {
        Page<O> dto = null;
        if (page != null && page.getContent() != null) {
            List<O> dtos = new ArrayList<>(page.getContent().size());
            for (Y entity : page.getContent()) {
                dtos.add(toDto(entity, dtoInstance));
            }
            Pageable pageable = PageRequest.of(page.getNumber(), page.getSize(), page.getSort());
            dto = new PageImpl<>(dtos, pageable, page.getTotalElements());
        }
        return dto;
    }
    protected <O, Y> List<O> toDto(Collection<Y> entities, O dtoInstance) {
        List<O> dtos;
        if (entities != null) {
            dtos = new ArrayList<>(entities.size());
        } else {
            dtos = new ArrayList<>(0);
        }
        if (entities != null) {
            for (Y entity : entities) {
                dtos.add(toDto(entity, dtoInstance));
            }
        }
        return dtos;
    }
    @SuppressWarnings({"unchecked", "rawtypes"})
    protected E toEntity(D dto) {
        if (dto == null) {
            return null;
        }
        E entity = null;
        try {
            // On crée une instance de l'entité
            entity = (E) ((Class) ((ParameterizedType) this.getClass().
                    getGenericSuperclass()).getActualTypeArguments()[1]).newInstance();
            // On recopie les valeurs du dto dans l'entité (correspondance par nom de variable)
            mapperService.map(dto, entity);
        } catch (InstantiationException | IllegalAccessException e) {
        }
        return entity;
    }
    protected <O, Y> Y toEntity(O dto, Class<Y> entityClass) {
        Y entity = null;
        if (dto == null) {
            return null;
        } else {
            try {
                // On crée une instance du DTO
                entity = (Y) entityClass.newInstance();
                // On recopie les valeurs du dto dans l'entité (correspondance par nom de variable)
                mapperService.map(dto, entity.getClass());
            } catch (InstantiationException | IllegalAccessException e) {
            }
        }
        return entity;
    }
    protected List<D> toDto(Collection<E> entities) {
        List<D> dtos = new ArrayList<>(entities != null ? entities.size() : 0);
        if (entities != null) {
            for (E entity : entities) {
                dtos.add(toDto(entity));
            }
        }
        return dtos;
    }

    protected String getRequestUserName(HttpServletRequest request) {
        return request.getSession().getAttribute("userName") != null ? request.getSession().getAttribute("userName").toString() : null;
    }

}
