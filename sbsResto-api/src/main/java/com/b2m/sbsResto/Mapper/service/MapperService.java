package com.b2m.sbsResto.Mapper.service;

import java.util.List;

public interface MapperService {
    /**
     * Mapper un dto source vers un dto cible.
     *
     * @param sourceObject dto source
     * @param targetClass  classe de la cible
     * @param <S>          type source
     * @param <D>          type cible
     * @return Nouvelle instance de la cible
     */
    <S, D> D map(S sourceObject, Class<D> targetClass);
    /**
     * Mapper un dto source vers un dto cible.
     *
     * @param sourceObjectList dto source list
     * @param targetClass  classe de la cible
     * @param <S>          type source
     * @param <D>          type cible
     * @return Nouvelle instance de la cible
     */
    <S, D> List<D> mapList(List<S> sourceObjectList, Class<D> targetClass);
    /**
     * Mapper un dto source vers un dto cible.
     *
     * @param sourceObject dto source
     * @param targetObject dto cible
     * @param <S>          type source
     * @param <D>          type cible
     */
    <S, D> void map(S sourceObject, D targetObject);
}
