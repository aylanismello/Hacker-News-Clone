import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';

const LinksList = ({ data, error, loading}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Not found</p>;
  
  const links = data.searchLinks || data.links;

  return (
    <div className="LinksList">
      <List>
        <>
          {links.map(({ title, url }, idx) => (
            <ListItem>
              <div key={url}>
                <ListItemIcon>{idx + 1}</ListItemIcon>
                <ListItemText>
                  <a href={url}>{title} </a>
                </ListItemText>
              </div>
            </ListItem>
          ))}
        </>
      </List>
    </div>
  );
};

export default LinksList;