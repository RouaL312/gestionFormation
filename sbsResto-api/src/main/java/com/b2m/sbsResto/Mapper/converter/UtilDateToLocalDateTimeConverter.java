package com.b2m.sbsResto.Mapper.converter;

import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.converter.BidirectionalConverter;
import ma.glasnost.orika.metadata.Type;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@Component
public class UtilDateToLocalDateTimeConverter extends BidirectionalConverter<Date, LocalDateTime> {
    @Override
    public LocalDateTime convertTo(Date source, Type<LocalDateTime> destinationType, MappingContext mappingContext) {
        return LocalDateTime.ofInstant(source.toInstant(), ZoneId.systemDefault());
    }
    @Override
    public Date convertFrom(LocalDateTime source, Type<Date> destinationType, MappingContext mappingContext) {
        return Date.from(source.atZone(ZoneId.systemDefault()).toInstant());
    }
}
