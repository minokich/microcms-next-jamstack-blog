import Link from "next/link";
import { client } from "../libs/client";
import { BlogContentType } from "./type";

export type PropsType = {
  blog: BlogContentType[];
}

const Home = (props: PropsType) => {
  const { blog } = props;
  return (
    <div>
      <ul>
        {blog.map((blog: BlogContentType) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const data:any = await client.get({ endpoint: "blog" });
  const propsValue: PropsType = {
    blog: data.contents,
  }
  return {
    props: propsValue
  };
};

export default Home;
