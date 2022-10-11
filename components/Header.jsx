import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web development", slug: "web-dev" },
];

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <Link href="/">
            <span>Graph CMS</span>
          </Link>
        </div>
        <div>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
