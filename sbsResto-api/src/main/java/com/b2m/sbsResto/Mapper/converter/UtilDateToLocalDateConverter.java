package com.b2m.sbsResto.Mapper.converter;

import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.converter.BidirectionalConverter;
import ma.glasnost.orika.metadata.Type;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@Component
public class UtilDateToLocalDateConverter extends BidirectionalConverter<Date, LocalDate> {
    @Override
    public LocalDate convertTo(Date source, Type<LocalDate> destinationType, MappingContext mappingContext) {
        return LocalDateTime.ofInstant(source.toInstant(), ZoneId.systemDefault()).toLocalDate();
    }
    @Override
    public Date convertFrom(LocalDate source, Type<Date> destinationType, MappingContext mappingContext) {
        return Date.from(source.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
    }
}
