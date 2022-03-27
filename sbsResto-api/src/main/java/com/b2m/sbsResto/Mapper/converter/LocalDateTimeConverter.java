package com.b2m.sbsResto.Mapper.converter;

import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.converter.BidirectionalConverter;
import ma.glasnost.orika.metadata.Type;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Convertisseur de LocalDateTime vers LocalDateTime car LocalDateTime n'est pas un Javabean contenant un constructeur vide
 */
@Component
public class LocalDateTimeConverter extends BidirectionalConverter<LocalDateTime, LocalDateTime> {
    @Override
    public LocalDateTime convertTo(LocalDateTime source, Type<LocalDateTime> destinationType, MappingContext mappingContext) {
        return LocalDateTime.from(source);
    }
    @Override
    public LocalDateTime convertFrom(LocalDateTime source, Type<LocalDateTime> destinationType, MappingContext mappingContext) {
        return LocalDateTime.from(source);
    }
}