import { stringify } from 'postcss'
import React, { Suspense } from 'react'

async function getDataUser(param:string){
    const res = await fetch(`https://api.github.com/users/${param}`)
    return res.json()
}

async function getDataRepos(param:string){
    const res = await fetch(`https://api.github.com/users/${param}/repos`)
    await new Promise(r=>setTimeout(r,2000))
    return res.json()
}

const RepoList= async ({slug}:any) => {
    const dataRepos = await getDataRepos(slug)

    return <>
<p>List Repository</p>
      <div>
      {JSON.stringify(dataRepos)}
        </div>    
    </>
}

export default async function DetailCari ({params}:{params:{slug:string}}) {
    const dataUser = await getDataUser(params.slug)

   
    return (
        <div>
            <p>Detail User : {params.slug }</p>
        <div>
            {JSON.stringify(dataUser)}
        </div>

        <div style={{marginTop:"10px"}}>
        <Suspense fallback={<div>Sedang mengambil repository....</div>}>
        <RepoList slug={params.slug}/>

        </Suspense>
        </div>
        </div>
    )
}