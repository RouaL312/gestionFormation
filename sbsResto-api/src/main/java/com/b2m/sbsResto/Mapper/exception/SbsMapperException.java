package com.b2m.sbsResto.Mapper.exception;

public class SbsMapperException extends RuntimeException {
    private static final long serialVersionUID = -6968835726625046032L;
    public SbsMapperException() {
    }
    public SbsMapperException(String message) {
        super(message);
    }
    public SbsMapperException(String message, Throwable cause) {
        super(message, cause);
    }
    public SbsMapperException(Throwable cause) {
        super(cause);
    }
}
