export type UserEditableFields = 'firstName' | 'lastName';

export type User = {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
}

export type UserEditable = Partial<
    Pick<
        User,
        UserEditableFields
    >
>