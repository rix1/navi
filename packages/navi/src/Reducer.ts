export type Reducer<X=any, Y=any> = (accumulator: Y | undefined, segmentInfo: X) => Y