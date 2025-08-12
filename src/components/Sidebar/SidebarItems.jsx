import { Home } from './Home'
import { Notifications } from './Notifications'
import { ProfileLink } from './ProfileLink'
import { CreatePost } from './CreatePost'
import { Search } from './Search'

export const SidebarItems = () => {
    return (
        <>
            <Home />
            <Search />
            <Notifications />
            <CreatePost />
            <ProfileLink />

        </>
    )
}
