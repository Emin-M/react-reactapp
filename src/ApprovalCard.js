const ApprovalCard = (props)=>{
    return (
        <div className="card m-3 w-25">
           <div className="card-header">{props.children}</div>
           <div className="card-body">
               <div className="card-link btn btn-primary">Approve</div>
               <div className="card-link btn btn-primary">Reject</div>
            </div>
      </div>
    )
}
export default ApprovalCard;