import React, {useEffect, useState} from 'react'
import { useApolloClient } from "react-apollo";

import categoryTreeGql from "../../../graphql/queries/categoryTree.gql";

const MenuCustom = () => {
    const [categoryTree, setCategoryTree] = useState([]);

    const client = useApolloClient();

    const query = client.query({
        query: categoryTreeGql,
        variables: {
          treeLevel: 3,
        },
      });
    

    useEffect(() => {
        
        categoryTree && query
            .then(({data}: any) => setCategoryTree(data?.categories))
            .catch(error => console.error("Query Error ** Categories Query **", error))

    }, [categoryTree]);

    return (
        <div>
            {
                categoryTree?.map(({name}) => <p>{name}</p>)
            }
        </div>
    )
}

export default MenuCustom
