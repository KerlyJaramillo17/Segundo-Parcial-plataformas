import { IsUUID } from 'class-validator';
import { CreateClienteInput } from './create-cliente.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEstudianteInput extends PartialType(CreateClienteInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
