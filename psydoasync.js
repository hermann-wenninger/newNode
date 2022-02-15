async function doSomething(arg1, arg2, arg3, arg4, arg5) {
    const { result1, result2 } = await doThis(arg1, arg2);
    const results = await doThat(arg2, arg3);
    await doSomethingElse(arg5);
    // do a final something
    return finalResult;
}