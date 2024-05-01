import NavBar from "@/components/NavBar"
import SearchBox from "./_component/SearchBox"

interface SearchLayoutProps {
    children: React.ReactNode
}

export default function SearchLayout ({children}: SearchLayoutProps) {
    return(
        <div>
            <NavBar />
            {children}
        </div>
    )
}