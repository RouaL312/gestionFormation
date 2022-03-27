package com.b2m.sbsResto.Mapper.builder;

import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.metadata.ClassMapBuilder;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

public abstract class AbstractMapperBuilder<A, B> implements MapperBuilder<A, B> {
    private MapperFactory mapperFactory;
    private Class<A> a;
    private Class<B> b;

    @SuppressWarnings("unchecked")
    public AbstractMapperBuilder() {
        Type[] types = ((ParameterizedType) this.getClass().getGenericSuperclass()).getActualTypeArguments();
        a = (Class<A>) types[0];
        b = (Class<B>) types[1];
    }
    @Override
    public void setFactory(MapperFactory factory) {
        this.mapperFactory = factory;
    }
    protected ClassMapBuilder<A, B> getBuilder() {
        return mapperFactory.classMap(a, b);
    }
}
