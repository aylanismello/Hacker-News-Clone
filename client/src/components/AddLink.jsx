import React, { useState, useEffect } from "react";
import {
  useHistory
} from "react-router-dom";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { TextField, Button, Box } from "@material-ui/core";

const ADD_LINK = gql`
  mutation AddLink($url: String, $title: String) {
    addLink(url: $url, title: $title) {
      link {
        title
        url
      }
      success
      message
    }
  }
`;

const AddLink = ({ setQuery }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const disabled = !url.trim() || !title.trim();
  const history = useHistory();

  const [addLink, { data, loading, error }] = useMutation(ADD_LINK, {
    onCompleted() {
      history.push('/');
    },
  });

  return (
    <Box>
      <form
        disabled={disabled}
        onSubmit={(e) => {
          e.preventDefault();

          addLink({
            variables: {
              url,
              title,
            },
          });
        }}
        className="AddLink"
      >
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title-input"
          variant="outlined"
          placeholder="Title"
        />
        <TextField
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          id="url-input"
          variant="outlined"
          placeholder="Url"
        />
        <Button disabled={disabled} type="submit" variant="contained" color="primary">
          Add Link
        </Button>
      </form>
      {error && <p> {error} </p>}
    </Box>
  );
};

export default AddLink;
