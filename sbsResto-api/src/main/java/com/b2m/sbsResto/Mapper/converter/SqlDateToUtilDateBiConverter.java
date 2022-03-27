package com.b2m.sbsResto.Mapper.converter;

import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.converter.BidirectionalConverter;
import ma.glasnost.orika.metadata.Type;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Le sérialiseur JSON n'aime pas le type java.sql.Date, il faut le transformer
 * en java.util.Date
 */
@Component
public class SqlDateToUtilDateBiConverter extends BidirectionalConverter<java.sql.Date, Date> {
    @Override
    public Date convertTo(java.sql.Date sqlDate, Type<Date> type, MappingContext mappingContext) {
        return sqlDate == null ? null : new Date(sqlDate.getTime());
    }
    @Override
    public java.sql.Date convertFrom(Date utilDate, Type<java.sql.Date> type, MappingContext mappingContext) {
        return utilDate == null ? null : new java.sql.Date(utilDate.getTime());
    }
}
