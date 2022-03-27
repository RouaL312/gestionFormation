package com.b2m.sbsResto.Mapper.converter;

import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.converter.BidirectionalConverter;
import ma.glasnost.orika.metadata.Type;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Le sérialiseur JSON n'aime pas le type java.sql.Date, il faut le transformer
 * en java.util.Date
 *
 * Force le type java.util.Date; java.sql.Date dérive de java.util.Date il faut donc
 * ce convertisseur pour forcer le format java.util.Date
 */
@Component
public class UtilDateToUtilDateConverter extends BidirectionalConverter<Date, Date> {
    @Override
    public Date convertTo(Date source, Type<Date> destinationType, MappingContext mappingContext) {
        return source == null ? null : new Date(source.getTime());
    }
    @Override
    public Date convertFrom(Date source, Type<Date> destinationType, MappingContext mappingContext) {
        return source == null ? null : new Date(source.getTime());
    }
}
