import React,{Component} from 'react'
import ContentLoader from "react-content-loader"
export default class LoadPages extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className=" white-box">
        <div className="container">
          <ContentLoader
            height={160}
            width={400}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="-1.75" y="60.52" rx="3" ry="3" width="310.05" height="7.55" />
            <rect x="-4" y="40" rx="3" ry="3" width="85" height="6.4" />
            <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
            <rect x="1" y="97" rx="3" ry="3" width="380" height="6.4" />
            <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
            <rect x="1.5" y="136.27" rx="3" ry="3" width="343" height="6.4" />
            <rect x="209.5" y="138.27" rx="3" ry="3" width="0" height="6.4" />
          </ContentLoader>
        </div>

      </div>

    )
  }
}
