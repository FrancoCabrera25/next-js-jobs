import dbConnect from '../../../lib/dbConnect';
import Job from '../../../models/Job';

export default async function handler(req, res) {

    const { method } = req

    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const queryObj = req.query;
          console.log(queryObj);
          if(queryObj.category === "All"){
            const jobs = await Job.find({}).sort({createdAt: -1}).exec() /* find all the data in our database */
            res.status(200).json({ success: true, data: jobs })  
          }else{
            const jobs = await Job.find({category: queryObj.category}).sort({createdAt: -1}).exec() /* find all the data in our database */
            res.status(200).json({ success: true, data: jobs }) 
          }
          
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const job = await Job.create(
            req.body
          ) /* create a new model in the database */
          res.status(201).json({ success: true, data: job })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }

}