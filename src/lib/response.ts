/**
 * Standard success response.
 */
export const success = (data: object, message: string, code: number) => ({
    code,
    data,
    message,
    success: true
})

/**
 * Standard error response.
 */
export const failed = (error: object, message: string, code: number) => ({
    code,
    error,
    message,
    success: false
})
