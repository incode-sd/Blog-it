import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "dr998cav",
    dataset: "production",
    useCdn: true
})