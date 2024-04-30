interface Context {
  packageJSON: unknown
}

// in演算子での絞り込みの改善
// 4.9以前では packageJSON.name のプロパティアクセスがエラーになる
export function tryGetPackageName(context: Context): string | undefined {
  const packageJSON = context.packageJSON
  if (packageJSON && typeof packageJSON === 'object') {
    // inで判定することで、packageJSONの型は「object & Record<"name", unknown>」になる
    if ('name' in packageJSON && typeof packageJSON.name === 'string') {
      // このプロパティアクセスが可能になる
      return packageJSON.name
    }
  }
  return undefined
}
