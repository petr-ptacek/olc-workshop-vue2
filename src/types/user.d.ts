export type UserEditableFields = 'firstName' | 'lastName' | 'sex';

export type Sex = 'male' | 'female';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  sex: Sex;
}

export type UserEditable = Partial<
    Pick<
        User,
        UserEditableFields
    >
>