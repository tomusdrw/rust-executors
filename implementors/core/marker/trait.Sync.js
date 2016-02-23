(function() {var implementors = {};
implementors['libc'] = [];implementors['syncbox'] = [];implementors['executors'] = ["impl&lt;P, R, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='eventual/join/struct.Progress.html' title='eventual::join::Progress'>Progress</a>&lt;P, R, E&gt; <span class='where'>where P: <a class='trait' href='eventual/join/trait.Partial.html' title='eventual::join::Partial'>Partial</a>&lt;R&gt;, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static, R: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static</span>","impl&lt;T, U, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='eventual/process/struct.Inner.html' title='eventual::process::Inner'>Inner</a>&lt;T, U, F&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>, U: <a class='trait' href='executors/trait.Async.html' title='executors::Async'>Async</a></span>","impl&lt;V, S, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='eventual/select/struct.Selection.html' title='eventual::select::Selection'>Selection</a>&lt;V, S, E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static, V: <a class='trait' href='eventual/select/trait.Values.html' title='eventual::select::Values'>Values</a>&lt;S, E&gt;, S: <a class='trait' href='eventual/select/trait.Select.html' title='eventual::select::Select'>Select</a>&lt;E&gt;</span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='eventual/sequence/struct.Inner.html' title='eventual::sequence::Inner'>Inner</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='executors/trait.Async.html' title='executors::Async'>Async</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()