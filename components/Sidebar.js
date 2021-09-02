import { useSession } from 'next-auth/client'
import { CalendarIcon,
         ChevronDownIcon, 
         ClockIcon, 
         DesktopComputerIcon, 
         ShoppingBagIcon, 
         UserGroupIcon,  } from '@heroicons/react/solid'
import {  UserIcon } from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
    const [session, loading] = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]" >
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UserIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Event" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
