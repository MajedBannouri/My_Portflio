import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

const portfolio = "</My_Portfolio>";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(

        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Firegream PicStore</CardTitle>
            <CardText>
               Gallery to store you best images
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/MajedBannouri/firegram-PictureStore-" colored>See On Github</a></Button>
              
            </CardActions>
            
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >{portfolio}</CardTitle>
            <CardText>
              My Specific Portfolio 
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/MajedBannouri/firegram-PictureStore-" colored>See On Github</a></Button>
              
            </CardActions>
           
          </Card>

          {/* Project 3 */}
          <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Covid19 Tracker</CardTitle>
            <CardText>
              Covid19 real time global and per counrty statistics  with charts and nice animations
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/MajedBannouri/covid19Tracker" colored>See On Github</a></Button>
              
            </CardActions>
            
          </Card>
        
          {/* Project 4 */}
          <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAAA81BMVEX///8zMzNon2M+hj0uLi5rv0dZWVlbmFVzq2MrKyt1rWRxqGF2rmMlJSV3sGNtpV94s2Jhm1x4tV94eHhnoFx2t1t0uFeoqKjw9e9jY2NxulNVlE72+vZvvE+wy62+1LxOkEkTExMfHx+BgYFWmkwPDw8xgTDb29tKSkqcnJw9PT1WmE0AAADIyMjx8fFgl1aXu5RYoknV1dW7u7vd6NyArXxCQkKUlJTn5+e3z7XNzc3M3ct1p3GjwqCtra1qamqHsYPh6+BZp0eGtn6HvXxVqUAnfCabwZGwz6ebx4zN48aDwWy22qteuzOe0YxRlkhClzTmAKvsAAANOElEQVR4nO2dfUPaVhTGA6FGZqmm0opNBBIBqSigQoUCNbjNbV039v0/zfLOfc9JiAVNnj/aWskl/HLy3LdzgiS9bE2+dK+3fQ67rONKydi72PZZ7K6Oy4VCqX3c3/Z57KocPoVC2bjf9onsqDw+hULF/LbtU9lJBXwKBfMyN2paaz6F3KgZQvjkRs0Qxic3akoEH9uoK3fbPqddEsWnULj6uu2T2iEx+JQftn1SOyQGn9Letk9qh5TzESvnI1bOR6ycj1g5H7FyPmLlfMTK+YiV8xEr5yNWzkesnI9YOR+xcj5i5XzEyvmIlfMRK+cjVs5HrJyPWDkfsXI+YuV8xMr5iJXzEWu7fC5Odj1rbWM+GyQMTR7aFTOlvL7aH63WIpWWJOn6/DhMpduQz327XUiaD3NvuO+dSl7fn0dv9/cVrbF5S9Lk1CiXjb2J99NGfL5VKonT8u7KleD9jNNJggYQfT86evvL/v7BQCuONmtJks7bLpFS+9y9Mzbg8/WL6R/gtxVDt10TeceycR7zeFTL394fvXP47FcHg55V26Ap74r7J2WeSBvwmTwYpQLeFlj9Y+RYV8nTi2t/fbTxuHwODgaDgdJLbkPhFfdk3/kXFB0gn/s2Dta8hGedfTboi1IwvyRKW/vx6cP7o5DP4cAhpCSzIeyKeyRMkz5RCJ+1eayPgrrIXYk6Nl4DiL5//PQB5XNQdQANevMENkReca4i+eDmEQqU+3rBPhbeAKLl32cfP+J83AAaVKuxbQgxng359I/bJc6RlXJEX08bD9FABW5D+r9vPn0i+XgBVLXVq4Nb4l7xJHyY5hHK7N4mPtZrAGpDP96cndF8DoMAqlaV6gxIxx6nCq9aDD4881gfzE/BjzzWa8B4ANjQ9zMbD5NPNQRU7c2XEDz30VcNyEdkHqHKxmfmsXsG8P3L7SgbWv79j4OHyccLIA9QtTfUo+gwupqEfATGg6tCTzmijIdoQGhD+r//vHnD54MEULQNga44jM9nEx6G5JQDYDy4BD72w6Ej4EMCEtgQ+IpjYvK5K8QKQ2zKEfNYrwHjgelj3888PJF8QkDV3q8cG4p91fxTo/nY5hEXdDjlmMQ/1muAYUOO8byJ5IMHkK0Wy4Zg3QVDFJ/+eZIw9BcuLq4S0XEb6BInUg/pAPiggKo98iabgLsLSiSf62Rh6N4jknSaGI9tY7jPzzotGB8S0GH18AkfT08SXXH/Y+F8+lfJP6B9jyU/2O7H8JHCsKmdxeGDAFKeplhT5wkvuSOCz7f4PSDaVPKDKT5WU+vB+FABJHfwfn6TqCb4nCS0MVfdlPloj3H4hICUzPDRYHwIQPLL5FMyDUPUOovPI4yPggLSYvIpC90pDp+SaQrfScjH7F5LfdGwnOAzdvhoMD5YAMmx+JSNe+FsKAYfY+/29lTUloBPMMkSrScRfHoOnxsYHySAmnH4eMuYonkZmI8/D72+5LfF5YOuFV7scRog+ax6DqEzGJ8Q0ECOwSfcjeMPr4F8kHWME5PXFocPucjDORmCz682H5vQTUw+TTifCroPw5uegfjg62DcGQibT6lALRLes0KIyafnBVA0Hx+QIkP5lAx8H69PbWiA+ZhdYs+UfY+UH5h8Koyp+WfG21B8Wi6gFoyP5gFqQvlU6H3g2y4jhAB8wt28mqUGm013NKDS1S2LT5m5W8rgS/NpOYS0TzA+2jp8AHxKzMcidBkvjOQTvmKhqEUl2Gx6IJsyL28lFp8Kc7OVcaVYfBxCLSAfJ4BkKB/2VWOBjOTjP4GioapFR8rQnRyTj4LxvC5NPjctT71HGB87gLTt8VkoRV+qppN8wgXEy2fg02rB+DS1IHy2wWeoBnyKCslnvQD9PHweYfHTtLWDfCql9cJWqnxCQE3u/hfFx0O0Q3zwDbB0+QSE5Js4fGxCO8OH3EBNm49LyA4I8P3lA9oRPtTGVfp8bm5WNp/VS+LT9PkwHl6WIp/fHn0+ruM+wvjIW+OjDxWPkFp0d0+ur1j5O8/AZ+V1SUA+8s/nEwzFl3N7CKQqwdbAhLXj+Qx8/CHN48/gs5eET6EU/HJW1CJSJFLl84iEjx1AMD4yjE+hxEjuYn54AJ91TndUik26fGwF4SPLN+nyofuWr8yVP8j6BjyZMnU+8lo2HggfGciHGJtMOCvHsPXDchuW050mn9+x8LH7eFj8yLIG44ONbc95+azQ9WdYTnfafGRUwPiRmxqQTzg3EuSzwvcvIKUlKfNZYXxWQD52AMH3d8zuBZFIn5QPxIZS5fM7Hj6y/AHIpxmDT9SmXqz900gbSpfPiuAjA/nIcfhEKOb+coQNpXt/kXjkGyAfGc9v+an778LaFDAf1o4CyYfCY99hMD5bzU8Q2RCDzxWznu6cfh+Cz4//GHxaMD5PeILdwwb5UcTzn68NyDFcG6L4lK6Y+eOSRPcZBB+902EAeg/h01Hx97prJ+fTJuYhXVCCCy+n+wvxOpNfjUltUxN8JN16YgRQNJ/O05B8r/ukCYglOq32HJagybYhnI+4wqdPjFlpoxoNaELv30fweZozip2SpR2zi215MxHqYIYNoXzKJufW4rwTy8gbMnmTrcR8OgqnWE6Ud8KRWeAMiIUDSgQAbUNrPrBv10DPmt3RLZ4IQqL7S+5MWW14OomXucypvPH0jZvDgomyoZAPuAz8JJz6sPlItTF+kzX5fDqU8WDqn8NvspIRcXmBdVLmKYtPhbX6xD1r34Y4fGwb0jBC747YfDos48EFrpygMlZoAevsrrCDXD7RxkO8k2dDXD6SNMX6eiaflQIqIARVzwAvL6BOk+z/LpN9rY9rQwI+kjREbKhH8+mtBMaDK7KOp9wGX947cZ2v3YURYXhqJvxaKNuGroQXrTZf32Tv3hF8VtGVg2uJq/cijQeXyIbML1T/179P+vyS/ueo9bdZMwihHh4/3JIvngQ3hrjkmHXevITcyPLu9BXaEMqndwitXEbESxFN8pmY2cFxPTgd6UPvJuut609b3JLT2mgkuOsYN0Z0qTBHFO1y/Ge4pKRl0SV04PNp/cFDMJortgS+ROarwkrNOcLqAjZ/hM8mmjlTjuYvDp8W13hqlpfutt7uZQizoYRPTAmE2JDZ3fJXhtXtvv5w/+DwgGs8dSXMpvDTBdgK9y3iPOqCI3/sGWdo/FzSrafO29afvF/PgkxS/6+xoHtzn+Oy2RObQt0VDHMrtkxrWZ/ynMVNo3CwzEdTj5CqLPg2NHkw0rOLr9e7/o2XtaFvPG4mux7+JLCh/q5/phTlG4+qBY/dWo59QkkeovTaNCv6joM+L4n5n1lUGCrkY//WNrSdE9sJ6UMNMR7ydwr3dxlRRFeFdGo/+8x2QQCPybANrY1HOJMP+jYlzrPcXr7WxhO1hLgeG2EcZ4vFK7alqT+ZiMqsdTWibUif15e1xuZPut1NjYqAORYqv8pPVYKtoGJt1GjUJNjD716aRhrEeHAtfBuauz9NZ5K1mDYlffxMp7hVJTJcf21IdY+ysVgjSdOl18hn5nxQ0RohR6O5C9b5px1Fw6IzsB6+wm5/an9M2LYgKacayS3TsnTJmklNF9SrUz34lLHVcI50Ima2cPis9JF46/5lisGntlwiPdGsbtmjHVWdW4sZ9rqQj2S560TLYiLMOy6aT22lKJpv1/pCVfzBkQ1JUVCHWfORFvP61LJeIx4WHyXomKSRuq54pPYyED6SPpq9Qm92JOITDI08+YWz4UAA5fN6JeCj+0Oj8aI+ndaHc29QqAXTiMzzcbp+O17CX+p1d1AY9OKZ5zN2ogeb0HuDSZ9J5vm4MPBOybJfHSywZp6PRvNxAkj1l+gzz0el7i/7nhvP53n8eHws15/HDc6yTub5zIL8FmU+rM+W5PA483y8AAqGiIpStOroEmrORxqGDwQLphfKIiSS87FvsbFGTMHU8Luwcj7uT7PF2A4bJZyAFZW8/0L4uNKXo0Z9GCaTeS/P+ZCqNdxFZ39rMOt8psPhkMLkzsm8AXTW+Tiduka+fOZMwLx15qzzcUKFqrR0oOTx4/JZOCgs4uXOpo4/J8s6n5Gy9ppADXfNw5uQZZ2PNHY7q+I0KFFZNtwkIdXfRs48n1o4P7UHPt6fxXz9EBn/LMntHZdWvj4fjg/DB1qu6Vj5/BQdP9fqc3fupborHOoCWSvL+XjSl7PGtF6vN4gt0mzwQQZ8vvjzL0y1ceLMj5ekpdtlo9moMD5eit1rzPgh5I5y0OTMJYCPn6KZLLHqZUkP0leDHLsFsgfIVpjim41ilSA5XHHrCb0phCCXmZMi/ooVFhco46EXTSr/xZksMQgqT/y/+PaT2RKVKTJSVnndUhBoWSxx0hdKUDdgcV7hzzYyWyLXcDJV5wtObNTzEkuBMms8bC0XGIa8xBvTyFLQ/ltUt5tB1byVwrDiCfKIiUwpnD84XpMbD0ONMGSChwDFKZ/LgMKxTjA12/YJ7ZyCxwEUgXW72ZO3yKOC63azp+m8WLR2zHj+BzMJUrrQiu3XAAAAAElFTkSuQmCC) center / cover'}} >Medical Research Algorithms</CardTitle>
            <CardText>
              Medical Information Research Algorithms using Wikipedia API, Mesh API and Terrier for testing algorithms efficacity
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/MajedBannouri/Medical-Information-Research" colored>See On Github</a></Button>
              
            </CardActions>
            
          </Card>
        
          
        </Grid>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Othres</h1></div>
      )
    } 

  }



  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Main projects</Tab>
          <Tab>Others</Tab>
         
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
