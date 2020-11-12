import { User } from './models'

export interface AuthStateInterface {
  user: User,
}

const state: AuthStateInterface = {
  user: {
    name: 'Jimmy',
    lastName: 'Kimmel',
    fullName: 'Jimmy Kimmel',
    description: 'American television host, comedian, writer, and producer.',
    profilePicture: 'https://www.gstatic.com/tv/thumb/persons/201646/201646_v9_bb.jpg',
    backgroundPicture: 'https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android-920x470.jpg'
  }
}

export default state
