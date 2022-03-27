package com.b2m.sbsResto.Mapper.builder;

import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.metadata.ClassMapBuilder;

public interface MapperBuilder<A, B> {
    /**
     * définir la factory
     *
     * @param factory MapperFactory
     */
    void setFactory(MapperFactory factory);
    /**
     * Définir le mapping
     *
     * @return ClassMapBuilder
     */
    ClassMapBuilder<A, B> getClassMap();
}
