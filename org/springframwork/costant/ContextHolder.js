/**
*
*
*
*
* @desc ContextHodler Object는 상수풀을 가진 객체를 생성하고 관리하는 오브젝트이다.
* @author ByeongGi Kim
* @see
* @version 0.1
*/
export class ContextHolder {


  construct()
  {
    this.cacheMap = new Map();
  }

  set setCacheMap(value) {
    this.cacheMap=value;
  }

  get getCacheMap() {
    return this.cacheMap;
  }



  mergeMap(){
    // return
  }


}
