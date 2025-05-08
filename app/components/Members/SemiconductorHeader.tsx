import { Link } from "@remix-run/react";
import React, { Fragment } from "react";
import { membersHeader } from "~/data/constant/membersHeader";

const SemiconductorHeader = () => {
  return (
    <div className="text-black">
      <div className="flex items-center gap-4">
        {membersHeader.map((item) => (
          <Fragment key={item.id}>
            <Link
              to={`/${item.title}`}
              className="hover:underline hover:transition-all"
            >
              {item.title}
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SemiconductorHeader;
