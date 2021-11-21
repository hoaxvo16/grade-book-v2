export class User {
  role: 'TEACHER' | 'STUDENT' | null = null;
  email: string = '';
  fistName: string = '';
  lastName: string = '';
  displayName: string = '';
  studentIdentification: string = '';
  profilePictureUrl: string = '';
  defaultAvatar: string = '';
  isPasswordNotSet: boolean = false;

  static map(user: User) {
    const temp = new User();
    temp.defaultAvatar = user.defaultAvatar;
    temp.displayName = user.displayName;
    temp.profilePictureUrl = user.profilePictureUrl;
    temp.fistName = user.fistName;
    temp.lastName = user.lastName;
    temp.email = user.email;
    temp.studentIdentification = user.studentIdentification;
    temp.role = user.role;
    temp.isPasswordNotSet = user.isPasswordNotSet;
    return temp;
  }
}
