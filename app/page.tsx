import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingParams } from "./actions/getListing";

export const dynamic = 'auto'

interface HomeProps {
  searchParams: IListingParams
}

const Home = async( {searchParams}: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();


  if(listings.length === 0){
    return(
      <EmptyState showReset/>

    )
  }

  return (
    <>
      <Container>
        <div className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        
        ">
          {listings.map((listing) => {
            return(
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              
              />
            )
          })}


        </div>


      </Container>
    </>
  )
}

export default Home