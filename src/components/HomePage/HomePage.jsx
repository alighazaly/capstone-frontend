import React , {useState,useEffect} from 'react';
import MainNavbar from './NavbarFolder/MainNavbar';
import SearchBar from './SearchBar';
import Categories from './CategoriesFolder/Categories';
import Rentals from './RentalsFolder/Rentals';
import Footer from './FooterFolder/Footer';


const HomePage = () => {
  const [rentals, setRentals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search,setSearchValue] = useState('');
 

    const fetchRentals = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://localhost:7105/api/User/getallappartments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRentals(data);
        console.log("Rentals: ",data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchRentals();
    },[])

 const handleDelete = async () => {
      fetchRentals();
    }


const handleApplyFilters = (filters) => {
  const filteredResults = rentals.filter(apartment => {
    return Object.keys(filters).every(key => {
      if (!filters[key]) return true; // No filter applied for this key
      if (Array.isArray(filters[key])) {
        return filters[key].includes(apartment[key]);
      } else if (key === 'category') {
        return apartment.categoryName === filters[key];
      } else if (key === 'type') {
        return apartment.typeOfPlace === filters[key];
      }else if(key === 'city'){
        return apartment.city === filters[key];
      }else if(key === 'country'){
        return apartment.country === filters[key]
      }else if(key === 'numberOfBathrooms'){
        return apartment.numberOfBathrooms >= filters[key]
      }else if(key === 'numberOfBedrooms'){
        return apartment.numberOfBedrooms >= filters[key]
      }else if(key === 'numberOfBeds'){
        return apartment.numberOfBeds >= filters[key]
      }else if(key === 'tvs'){
        return apartment.tvs === filters[key]
      }else if(key === 'waterContainers'){
        return apartment.waterContainers >= filters[key]
      }else if(key === 'masterBedrooms'){
        return apartment.masterBedrooms >= filters[key]
      }else if(key === 'parking'){
        return apartment.parking >= filters[key]
      }else if(key === 'price'){
        return apartment.price <= filters[key]
      }else if(key === 'wifi'){
        return apartment.wifi === filters[key]
      }else if(key === 'kitchen'){
        return apartment.kitchen === filters[key]
      }else if(key === 'airConditioner'){
        return apartment.airConditionner === filters[key]
      }else if(key === 'workSpace'){
        return apartment.workSpace === filters[key]
      }else if(key === 'pool'){
        return apartment.pool === filters[key]
      }else if(key === 'hotTub'){
        return apartment.hotTube === filters[key]
      }else if(key === 'gym'){
        return apartment.gym === filters[key]
      }else if(key === 'bbqGrill'){
        return apartment.bbqGrill === filters[key]
      }else if(key === 'indoorFireplace'){
        return apartment.indoorFirePlace === filters[key]
      }else if(key === 'smockingAllowed'){
        return apartment.smokingAllowed === filters[key]
      }else if(key === 'elevator'){
        return apartment.elevator === filters[key]
      }else if(key === 'garden'){
        return apartment.garden === filters[key]
      }else if(key === 'generator'){
        return apartment.generator === filters[key]
      }
    });
  });

  // Log the filters and filtered results for inspection
  console.log('Applied Filters:', filters);
  console.log('Filtered Results:', filteredResults);

  // Set the filtered apartments state
  setFilteredApartments(filteredResults);
};

const handleSearchChange = (value) => {
  setSearchValue(value);
  // Apply search filter here if needed
};

const handleSearchIconClick = () => {
  console.log("Search icon clicked in SearchBar component!");
 // Perform search filtering
 const searchResults = rentals.filter(apartment => {
  // Check if apartment title or description includes the search value
  return (
    apartment.title.toLowerCase().includes(search.toLowerCase()) ||
    apartment.description.toLowerCase().includes(search.toLowerCase())
  );
});

// Update the filtered apartments state with search results
setFilteredApartments(searchResults);
};
  
  return (
    <div>
        <MainNavbar />
        <SearchBar  onSelectCategory  = {setSelectedCategory} onApplyFilters={handleApplyFilters} onSearchChange={handleSearchChange}  onSearchIconClick={handleSearchIconClick}/>
        <Categories onSelectCategory={setSelectedCategory}  onApplyFilters = {handleApplyFilters} />
        <Rentals rentals={filteredApartments.length > 0 ? filteredApartments : rentals} loading={loading} handleDelete = {handleDelete}/> 
        <Footer />
    </div>
  )
}

export default HomePage;