import Link from 'next/link';
// import { getData } from '../lib/data'


// export function SwLink ( { author, isStarWars, id, info } ) {
//   let tag = (isStarWars) ? "/SW/" : "/notSW/";
//   console.log(id +" " + author +" " + isStarWars + " " + info);
//   return (<div className="p-2 border border-danger border-5 rounded mt-5">
//       <h6>Their friend from another universe:</h6>
//     <button className="btn btn-danger">
//           <Link key={"link" + id} href={tag + id}>
//             <a key={id} className="list-group-item list-group-item-action">hello</a>
//           </Link>
//     </button>  
//   </div>)
// }


export default function CharacterList ( { isStarWars, info } ) {
  let tag = (isStarWars) ? "/SW/" : "/notSW/";
  console.log(tag + " 1-4 is sw " +info.id)
    return ( <>
     <div className="row text-center">
        <h1>Quote from Character {info.author}</h1>
      </div>
      <article className="card col-6 m-auto my-3">
        <div className="card-body">
            <h5 className="card-title">{info.quote}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{info.author}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{
                (info.sw) ? "Star Wars" : "Not Star Wars"
            }</h6>
            <button className="btn btn-primary"><a href={info.youtube}>{info.youtubeTitle}</a></button>
            <div className="p-2 border border-danger border-5 rounded mt-5">
      <h6>Their friend from another universe:</h6>
    <button className="btn btn-danger">
          <Link key={info.id} href={tag + info.id}>
            <a key={info.id} className="list-group-item list-group-item-action">{info.friend}</a>
          </Link>
    </button>  
  </div>
        </div>
      </article>
      </>
    );
}