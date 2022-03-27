package com.b2m.sbsResto.Mapper.service;

import com.b2m.sbsResto.Mapper.exception.SbsMapperException;
import ma.glasnost.orika.MapperFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MapperServiceImpl implements MapperService {
    @Autowired
    private MapperFacade mapperFacade;
    @Override
    public <S, D> D map(S sourceObject, Class<D> targetClass) {
        return mapperFacade.map(sourceObject, targetClass);
    }
    @Override
    public <S, D> List<D> mapList(List<S> sourceObjectList, Class<D> targetClass) {
        List<D> listTarget = null;
        if (sourceObjectList != null && !sourceObjectList.isEmpty()) {
            listTarget = new ArrayList<>();
            for (S sourceObject : sourceObjectList) {
                listTarget.add(mapperFacade.map(sourceObject, targetClass));
            }
        }
        return listTarget;
    }
    @Override
    public <S, D> void map(S sourceObject, D targetObject) {
        try {
            mapperFacade.map(sourceObject, targetObject);
        } catch (Exception e) {
            final String msg = String.format("Erreur lors du mapping entre %s et %s", sourceObject.getClass().getName(), targetObject.getClass().getName());
            throw new SbsMapperException(msg, e);
        }
    }
}
