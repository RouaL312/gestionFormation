package com.b2m.sbsResto.Mapper.config;

import com.b2m.sbsResto.Mapper.builder.MapperBuilder;
import ma.glasnost.orika.Converter;
import ma.glasnost.orika.Mapper;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

import java.util.Map;

@Configuration
public class MapperConfig implements ApplicationContextAware {

    private ApplicationContext applicationContext;

    @Bean
    @DependsOn("mapperFactory")
    public MapperFacade mapperFacade(MapperFactory mapperFactory) {
        return mapperFactory.getMapperFacade();
    }
    @SuppressWarnings({"rawtypes", "unchecked"})
    @Bean(name = "mapperFactory")
    public MapperFactory mapperFactory() {
        final DefaultMapperFactory mapperFactory = new DefaultMapperFactory.Builder().build();
        final Map<String, MapperBuilder> mapperBuilders = applicationContext.getBeansOfType(MapperBuilder.class);
        for (final MapperBuilder mapperBuilder : mapperBuilders.values()) {
            addMapperBuilder(mapperFactory, mapperBuilder);
        }
        //enregister les CustomConverter
        final Map<String, Converter> converters = applicationContext.getBeansOfType(Converter.class);
        for (final Converter converter : converters.values()) {
            mapperFactory.getConverterFactory().registerConverter(converter);
        }
        //enregistrer les CustomMapper
        final Map<String, Mapper> mappers = applicationContext.getBeansOfType(Mapper.class);
        for (final Mapper mapper : mappers.values()) {
            mapperFactory.classMap(mapper.getAType(), mapper.getBType())
                    .byDefault()
                    .customize(mapper)
                    .register();
        }
        return mapperFactory;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    private void addMapperBuilder(MapperFactory mapperFactory, final MapperBuilder<?, ?> mapperBuilder) {
        mapperBuilder.setFactory(mapperFactory);
        mapperBuilder.getClassMap().register();
    }
}