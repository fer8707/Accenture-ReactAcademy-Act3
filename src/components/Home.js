import React, {useContext, useState} from 'react';
import Header from './Header';
import PostModal from './PostModal';
import FilterTabs from './FilterTabs';
import PostList from './PostList';
import ThemeContext from './ThemeContext';

function Home({ postList }) {

    const theme = useContext(ThemeContext)
  
    const [filter, setFilter] = useState('All')

    const handleChangeFilter = (category) => {
        setFilter(category)
    }

  return (
    <>
      <Header theme={theme} />
      <PostModal theme={theme} modalMode='create'/>
      <FilterTabs theme={theme} changeFilter={handleChangeFilter}/>
      <PostList theme={theme} postList={postList} filter={filter}/>
    </>
  );
}

export default Home;
