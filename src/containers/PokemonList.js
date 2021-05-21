import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonAction";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  //state para el search
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p className="text-2xl">loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-4 mt-10 w-full">
          {pokemonList.data.map((el) => {
            return (
              <div
                className="sm:flex sm:items-center flex-1 justify-center px-6 py-4 h-full bg-green-700 border-b rounded shadow"
                key={el.name}
              >
                <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex flex-row py-4">
                  <p className="text-2xl leading-tight text-yellow-500 mt-4">
                    {el.name}
                  </p>
                  <div className="mt-4">
                    <Link
                      to={`/pokemon/${el.name}`}
                      className="text-blue-800 text-xl hover:text-white hover:bg-blue-800 border border-blue-800 text-xs font-semibold rounded-full px-4 py-1 mx-8 leading-normal"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p className="text-6xl">{pokemonList.errorMsg}</p>;
    }

    return <p className="text-6xl">unable to get data</p>;
  };

  return (
    <div className="p-10  py-20  flex  flex-col  flex-wrap content-center">
        <div className='w-full flex justify-center '>

      <div className="mt-3 mx-5 flex  flex-row  flex-wrap w-1/3">
        <input
          className="text-gray-600  w-2/3 border p-2  rounded-l-lg"
          placeholder="Search your Pokemon"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2  w-1/3  bg-blue-800  rounded-r-lg  text-white hover: bg-blue-800"
          onClick={() => props.history.push(`/pokemon/${search}`)}
        >
          Search
        </button>
      </div>
        </div>
      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <div className={""}>
          <ReactPaginate
            pageCount={Math.ceil(pokemonList.count / 20)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(data) => fetchData(data.selected + 1)}
            containerClassName={"pagination"}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonList;
