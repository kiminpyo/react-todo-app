import React from "react";
import auth from "../../hoc/auth";

const NoMatch = () => {
    return (
        <div>
            해당하는 페이지가 없어요
            <img src='' alt='' />
        </div>
    );
};

export default auth(NoMatch, true);
