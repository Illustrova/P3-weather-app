import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Autocomplete } from "components/Autocomplete";

import useAutocomplete from "hooks/useAutocomplete";
import { useState, useEffect } from "react";
import { isError } from "lib/helpers";

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAutocompleteShown, setAutocompleteShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { data: cities, error } = useAutocomplete(searchQuery);

  useEffect(() => {
    if (isError(error)) setErrorMessage(error.message);
  }, [error]);

  const handleInput = (value: string) => {
    setErrorMessage(""); //reset error
    if (!value || value.length < 4) {
      setAutocompleteShown(false);
      setErrorMessage("Type at least 3 letters");
    }
    setAutocompleteShown(true);
    setSearchQuery(value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Weather</h1>
        <div className={styles.search}>
          <Input
            id="city"
            placeholder="Type your city..."
            onChangeCallback={handleInput}
          />
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M225.474 0C101.151 0 0 101.151 0 225.474c0 124.33 101.151 225.474 225.474 225.474 124.33 0 225.474-101.144 225.474-225.474C450.948 101.151 349.804 0 225.474 0zm0 409.323c-101.373 0-183.848-82.475-183.848-183.848S124.101 41.626 225.474 41.626s183.848 82.475 183.848 183.848-82.475 183.849-183.848 183.849z" />
              <path d="M505.902 476.472 386.574 357.144c-8.131-8.131-21.299-8.131-29.43 0-8.131 8.124-8.131 21.306 0 29.43l119.328 119.328A20.74 20.74 0 0 0 491.187 512a20.754 20.754 0 0 0 14.715-6.098c8.131-8.124 8.131-21.306 0-29.43z" />
            </svg>
          </Button>
        </div>
        <div className={`${styles.error}`}>{errorMessage}</div>
        <div className={styles.content}>
          <Autocomplete cities={cities} isShown={isAutocompleteShown} />
        </div>
      </main>
    </div>
  );
};

export default Home;
