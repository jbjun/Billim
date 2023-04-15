export function createValidator(pattern: RegExp): (value: string) => boolean {
  //   const pattern = /^\d{6}$/
  return (value: string) => {
    const validate = pattern.test(value)

    return validate
  }
}
