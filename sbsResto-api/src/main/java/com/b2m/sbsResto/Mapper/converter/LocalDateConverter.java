package com.b2m.sbsResto.Mapper.converter;

import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.converter.BidirectionalConverter;
import ma.glasnost.orika.metadata.Type;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/**
 *  Convertisseur de localdate vers localdate car LocalDate n'est pas un Javabean contenant un constructeur vide
 */
@Component
public class LocalDateConverter extends BidirectionalConverter<LocalDate, LocalDate> {

    @Override
    public LocalDate convertTo(LocalDate source, Type<LocalDate> destinationType, MappingContext mappingContext) {
        return LocalDate.from(source);
    }
    @Override
    public LocalDate convertFrom(LocalDate source, Type<LocalDate> destinationType, MappingContext mappingContext) {
        return LocalDate.from(source);
    }

}