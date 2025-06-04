import {
  IsBoolean,
  IsNumber,
  IsString,
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
} from 'class-validator';

// Cách 1: Sử dụng ValidatorConstraint
@ValidatorConstraint({ name: 'customStartsWithUppercase', async: false })
export class StartsWithUppercaseConstraint
  implements ValidatorConstraintInterface
{
  validate(value: any, _args?: ValidationArguments): boolean {
    console.log('_args :>> ', _args);

    if (typeof value !== 'string') return false;
    return (
      value.charAt(0) === value.charAt(0).toUpperCase() &&
      value.charAt(0) !== value.charAt(0).toLowerCase()
    );
  }

  defaultMessage(_args?: ValidationArguments): string {
    return 'Tên phải bắt đầu bằng chữ cái in hoa';
  }
}

@ValidatorConstraint({ name: 'customIsAdult', async: false })
export class IsAdult implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    if (typeof value !== 'number') return false;
    return value >= 18;
  }

  defaultMessage(_args?: ValidationArguments): string {
    return 'AGE must be at least 18 years old';
  }
}

export class CreateStudentDto {
  @IsString()
  @Validate(StartsWithUppercaseConstraint, {
    message: 'Tên học sinh phải bắt đầu bằng chữ cái in hoa!',
  })
  name: string;

  @IsNumber()
  @Validate(IsAdult)
  age: number;

  @IsBoolean()
  isActive: boolean;
}
