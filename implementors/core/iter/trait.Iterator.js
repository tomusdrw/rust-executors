(function() {var implementors = {};
implementors['libc'] = [];implementors['syncbox'] = [];implementors['eventual'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='eventual/struct.StreamIter.html' title='eventual::StreamIter'>StreamIter</a>&lt;T, E&gt;",];implementors['executors'] = ["impl&lt;T, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='eventual/stream/struct.StreamIter.html' title='eventual::stream::StreamIter'>StreamIter</a>&lt;T, E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
